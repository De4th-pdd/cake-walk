import urllib.request
import urllib.error
from PIL import Image
import io

BASE_URL = "http://localhost:3000"

images_to_test = [
    "/images/hero-banner.webp",
    "/images/custom/custom-wedding.webp",
    "/images/custom/custom-birthday.webp",
    "/images/custom/custom-floral.webp",
    "/images/custom/custom-chocolate.webp",
    "/images/products/classic-churros.webp",
    "/images/products/loaded-churros.webp",
    "/images/products/churro-waffle.webp",
    "/images/products/churros-platter.webp",
    "/images/products/chocochino-cake.webp",
    "/images/products/double-chocolate-fudge-cake.webp",
    "/images/products/vanilla-caramel-crunch-cake.webp",
    "/images/products/lotus-tres-leches.webp",
    "/images/products/ny-cheesecake.webp",
    "/images/products/molten-lava-cake.webp",
    "/images/products/chocolate-fudge-brownie.webp",
    "/images/products/walnut-brownie.webp",
    "/images/products/lemon-tart.webp",
    "/images/products/apple-pie.webp",
    "/images/products/banana-bread.webp",
    "/images/products/chocolate-chip-cookie.webp",
    "/images/products/dark-chocolate-cookie.webp",
    "/images/products/lotus-biscoff-cupcake.webp",
    "/images/products/nutella-cupcake.webp",
    "/images/products/chocolate-fudge-cupcake.webp",
    "/images/products/oreo-cupcake.webp",
    "/images/products/red-velvet-cupcake.webp",
    "/images/products/hot-chocolate.webp",
    "/images/products/karak-chai.webp",
]

print(f"Testing {len(images_to_test)} images on {BASE_URL}...")
all_passed = True

for path in images_to_test:
    url = BASE_URL + path
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            content_type = resp.headers.get("Content-Type", "")
            data = resp.read()
            
            # Verify WebP magic bytes
            is_webp = data[:4] == b"RIFF" and data[8:12] == b"WEBP"
            # Verify decode with PIL
            im = Image.open(io.BytesIO(data))
            w, h = im.size
            
            if status == 200 and ("webp" in content_type or is_webp) and w > 0 and h > 0:
                print(f"  ✓ 200 OK | {path:<42} | {w}x{h} | {content_type} | {len(data)} bytes")
            else:
                print(f"  ✗ FAILED | {path:<42} | status={status}, type={content_type}, size={w}x{h}")
                all_passed = False
    except Exception as e:
        print(f"  ✗ ERROR  | {path:<42} | {e}")
        all_passed = False

if all_passed:
    print("\nALL 29 IMAGES PASSED HTTP 200, WEBP DECODE & MIME TYPE CHECKS!")
else:
    print("\nSOME CHECKS FAILED.")
