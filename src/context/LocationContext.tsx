'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import { business, type BakeryBranch } from '@/data/business';

export type OrderType = 'delivery' | 'pickup';

export interface LocationState {
  orderType: OrderType;
  city: string;
  area: string;
  streetAddress: string;
  pickupBranch: BakeryBranch;
  pickupDate: string;
  pickupTime: string;
  isLocationSet: boolean;
  isModalOpen: boolean;
}

interface LocationContextValue extends LocationState {
  setOrderType: (type: OrderType) => void;
  setCity: (city: string) => void;
  setArea: (area: string) => void;
  setStreetAddress: (addr: string) => void;
  setPickupDate: (date: string) => void;
  setPickupTime: (time: string) => void;
  confirmLocation: () => void;
  openLocationModal: () => void;
  closeLocationModal: () => void;
  getFormattedLocationString: () => string;
}

const STORAGE_KEY = 'cakewalk_order_preference_v2';

export const lahoreAreas = [
  'DHA Phase 8 – Ex Air Avenue',
  'DHA Phase 5 & 6',
  'DHA Phase 1, 2, 3 & 4',
  'DHA Phase 7',
  'Gulberg (I, II, III)',
  'Lahore Cantt & Cavalry Ground',
  'Askari 10 & 11',
  'Model Town & Garden Town',
  'Johar Town & Faisal Town',
  'WAPDA Town & Valencia',
  'Bahria Town Lahore',
  'Lake City',
  'Other Lahore Area (Specify in Address)',
];

export const lahorePopularAreas = lahoreAreas;

const LocationContext = createContext<LocationContextValue | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [city, setCity] = useState<string>('Lahore');
  // General area/neighbourhood only (not exact address)
  const [area, setArea] = useState<string>('DHA Phase 8');
  // Exact street address is customer-entered and NOT persisted across long-term localStorage
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [pickupBranch] = useState<BakeryBranch>(business.branches[0]);
  const [pickupDate, setPickupDate] = useState<string>('Today');
  const [pickupTime, setPickupTime] = useState<string>('Preferred time (confirmed on WhatsApp)');
  const [isLocationSet, setIsLocationSet] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Load non-sensitive preferences on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (parsed.orderType) setOrderType(parsed.orderType);
        if (parsed.city) setCity(parsed.city);
        if (parsed.area) setArea(parsed.area);
        if (parsed.pickupDate) setPickupDate(parsed.pickupDate);
        if (parsed.pickupTime) setPickupTime(parsed.pickupTime);
        setIsLocationSet(true);
      } else {
        // Welcome first-time visitor with prompt
        const timer = setTimeout(() => {
          setIsModalOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const openLocationModal = useCallback(() => setIsModalOpen(true), []);
  const closeLocationModal = useCallback(() => setIsModalOpen(false), []);

  const confirmLocation = useCallback(() => {
    setIsLocationSet(true);
    setIsModalOpen(false);
    try {
      // Store ONLY non-sensitive preferences (never exact customer street address)
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          orderType,
          city,
          area,
          pickupDate,
          pickupTime,
        })
      );
    } catch {
      // Ignore storage error
    }
  }, [orderType, city, area, pickupDate, pickupTime]);

  const getFormattedLocationString = useCallback(() => {
    if (orderType === 'pickup') {
      return `🏪 Pickup · ${pickupBranch.shortAddress}`;
    }
    return `🚗 Delivery · ${area || 'Lahore'}`;
  }, [orderType, area, pickupBranch]);

  return (
    <LocationContext value={{
      orderType,
      city,
      area,
      streetAddress,
      pickupBranch,
      pickupDate,
      pickupTime,
      isLocationSet,
      isModalOpen,
      setOrderType,
      setCity,
      setArea,
      setStreetAddress,
      setPickupDate,
      setPickupTime,
      confirmLocation,
      openLocationModal,
      closeLocationModal,
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
