'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { business } from '@/data/business';

export type OrderType = 'delivery' | 'pickup';

export interface LocationState {
  orderType: OrderType;
  city: string;
  area: string;
  streetAddress: string;
  landmark: string;
  pickupBranch: string;
  pickupDate: string;
  pickupTime: string;
  isLocationSet: boolean;
  isModalOpen: boolean;
  userCoords?: { latitude: number; longitude: number };
}

interface LocationContextValue extends LocationState {
  setOrderType: (type: OrderType) => void;
  setCity: (city: string) => void;
  setArea: (area: string) => void;
  setStreetAddress: (addr: string) => void;
  setLandmark: (landmark: string) => void;
  setPickupDate: (date: string) => void;
  setPickupTime: (time: string) => void;
  confirmLocation: () => void;
  openLocationModal: () => void;
  closeLocationModal: () => void;
  requestCurrentLocation: () => Promise<boolean>;
  getFormattedLocationString: () => string;
}

const STORAGE_KEY = 'cakewalk_location_preference';

export const lahorePopularAreas = [
  'DHA Phase 8 – Ex Air Avenue (Bakery Vicinity)',
  'DHA Phase 5',
  'DHA Phase 6',
  'DHA Phase 1',
  'DHA Phase 2',
  'DHA Phase 3',
  'DHA Phase 4',
  'DHA Phase 7',
  'Gulberg III',
  'Gulberg II',
  'Lahore Cantt',
  'Askari 11',
  'Askari 10',
  'Model Town',
  'Cavalry Ground',
  'Garden Town',
  'Johar Town',
  'Faisal Town',
  'WAPDA Town',
  'Valencia Town',
  'Bahria Town Lahore',
  'Lake City',
];

const LocationContext = createContext<LocationContextValue | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [city, setCity] = useState<string>('Lahore');
  const [area, setArea] = useState<string>('DHA Phase 8 – Ex Air Avenue');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [landmark, setLandmark] = useState<string>('');
  const [pickupBranch] = useState<string>(business.address.full);
  const [pickupDate, setPickupDate] = useState<string>('Today');
  const [pickupTime, setPickupTime] = useState<string>('As soon as ready (approx. 35-45 mins)');
  const [isLocationSet, setIsLocationSet] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userCoords, setUserCoords] = useState<{ latitude: number; longitude: number } | undefined>();

  // Load saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (parsed.orderType) setOrderType(parsed.orderType);
        if (parsed.city) setCity(parsed.city);
        if (parsed.area) setArea(parsed.area);
        if (parsed.streetAddress) setStreetAddress(parsed.streetAddress);
        if (parsed.pickupDate) setPickupDate(parsed.pickupDate);
        if (parsed.pickupTime) setPickupTime(parsed.pickupTime);
        setIsLocationSet(true);
      } else {
        // First-time visit: trigger modal after short welcoming delay
        const timer = setTimeout(() => {
          setIsModalOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const openLocationModal = useCallback(() => setIsModalOpen(true), []);
  const closeLocationModal = useCallback(() => setIsModalOpen(false), []);

  const confirmLocation = useCallback(() => {
    setIsLocationSet(true);
    setIsModalOpen(false);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          orderType,
          city,
          area,
          streetAddress,
          pickupDate,
          pickupTime,
        })
      );
    } catch {
      // Ignore storage error
    }
  }, [orderType, city, area, streetAddress, pickupDate, pickupTime]);

  const requestCurrentLocation = useCallback(async (): Promise<boolean> => {
    if (!navigator.geolocation) return false;

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
          setUserCoords(coords);
          // Set friendly location marker
          setCity('Lahore');
          setArea('Current Location (GPS Detected)');
          resolve(true);
        },
        () => {
          // Denied or error
          resolve(false);
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    });
  }, []);

  const getFormattedLocationString = useCallback(() => {
    if (orderType === 'pickup') {
      return `Pickup from DHA Phase 8, Lahore (${pickupDate})`;
    }
    return `Delivery to ${area || 'Lahore'}`;
  }, [orderType, area, pickupDate]);

  return (
    <LocationContext value={{
      orderType,
      city,
      area,
      streetAddress,
      landmark,
      pickupBranch,
      pickupDate,
      pickupTime,
      isLocationSet,
      isModalOpen,
      userCoords,
      setOrderType,
      setCity,
      setArea,
      setStreetAddress,
      setLandmark,
      setPickupDate,
      setPickupTime,
      confirmLocation,
      openLocationModal,
      closeLocationModal,
      requestCurrentLocation,
      getFormattedLocationString,
    }}>
      {children}
    </LocationContext>
  );
}

export function useLocation(): LocationContextValue {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error('useLocation must be used within <LocationProvider>');
  return ctx;
}
