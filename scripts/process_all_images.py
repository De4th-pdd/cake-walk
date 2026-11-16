import os
import glob
from PIL import Image

BASE_DIR = r"d:\cake walk by ayisa\cake-walk"
PUBLIC_IMAGES = os.path.join(BASE_DIR, "public", "images")
PRODUCTS_DIR = os.path.join(PUBLIC_IMAGES, "products")
CUSTOM_DIR = os.path.join(PUBLIC_IMAGES, "custom")

# 1. Clean up mock SVG .jpg files
for jpg in glob.glob(os.path.join(PRODUCTS_DIR, "*.jpg")):
    os.remove(jpg)
    print(f"Removed SVG mock jpg: {os.path.basename(jpg)}")

hero_bg_jpg = os.path.join(PUBLIC_IMAGES, "hero-bg.jpg")
if os.path.exists(hero_bg_jpg):
    os.remove(hero_bg_jpg)
    print("Removed hero-bg.jpg")

# 2. Remove unconfirmed items SVG placeholders
for f in ["cadbury-malt.webp", "red-velvet-cookie.webp", "butterscotch-cookie.webp"]:
    p = os.path.join(PRODUCTS_DIR, f)
    if os.path.exists(p):
        os.remove(p)
        print(f"Removed unconfirmed item placeholder: {f}")

# 3. Re-encode all genuine product images to true WEBP format
for webp_path in glob.glob(os.path.join(PRODUCTS_DIR, "*.webp")):
    with open(webp_path, "rb") as fp:
        head = fp.read(12)
        is_true_webp = head[:4] == b"RIFF" and head[8:12] == b"WEBP"
    
    if not is_true_webp:
        im = Image.open(webp_path)
        im.save(webp_path, "WEBP", quality=90, method=6)
        print(f"Re-encoded to genuine WEBP: {os.path.basename(webp_path)} ({im.size})")

# 4. Re-encode hero-banner.webp
hero_banner = os.path.join(PUBLIC_IMAGES, "hero-banner.webp")
if os.path.exists(hero_banner):
    with open(hero_banner, "rb") as fp:
        head = fp.read(12)
        is_true_webp = head[:4] == b"RIFF" and head[8:12] == b"WEBP"
    if not is_true_webp:
        im = Image.open(hero_banner)
        im.save(hero_banner, "WEBP", quality=90, method=6)
        print(f"Re-encoded hero banner to genuine WEBP ({im.size})")

# 5. Remove the 4 SVG emoji files from custom/
for svg_emoji in ["birthday-floral.webp", "lambeth-vintage.webp", "character-kids.webp", "drip-chocochino.webp"]:
    p = os.path.join(CUSTOM_DIR, svg_emoji)
    if os.path.exists(p):
        os.remove(p)
        print(f"Removed SVG emoji custom file: {svg_emoji}")

# 6. Create the 4 genuine Cake Walk custom cake images from Instagram screenshots
# Princess celebration cake from post modal:
princess_src = r"C:\Users\INTEL\.gemini\antigravity\brain\0363fd3d-02eb-4749-89e5-8aa119492d5b\browser_sandbox\screenshots\step_28_shot_1_cake_post_princess.png"
if os.path.exists(princess_src):
    im_modal = Image.open(princess_src)
    # The cake photo is located in the left pane
    # crop x: 15 to 395, y: 120 to 620
    im_cake = im_modal.crop((15, 120, 395, 620))
    target = os.path.join(CUSTOM_DIR, "custom-birthday.webp")
    im_cake.save(target, "WEBP", quality=90)
    print(f"Created authentic custom-birthday.webp from Cake Walk Instagram post ({im_cake.size})")

# Wedding / Castle Cake from Instagram post grid (Dfwa3WLRZRj):
grid1_src = r"C:\Users\INTEL\.gemini\antigravity\brain\0363fd3d-02eb-4749-89e5-8aa119492d5b\browser_sandbox\screenshots\step_12_shot_1_posts_grid_1.png"
if os.path.exists(grid1_src):
    grid1 = Image.open(grid1_src)
    col_w = (769 - 20) / 3
    # Post 5 (row 1, col 2)
    x1 = int(10 + 2 * col_w + 3)
    x2 = int(10 + 3 * col_w - 3)
    y1 = int(50 + 1 * col_w + 3)
    y2 = int(50 + 2 * col_w - 3)
    crop_wedding = grid1.crop((x1, y1, x2, y2))
    target_wedding = os.path.join(CUSTOM_DIR, "custom-wedding.webp")
    crop_wedding.save(target_wedding, "WEBP", quality=90)
    print(f"Created authentic custom-wedding.webp from Cake Walk Instagram post ({crop_wedding.size})")

# Handcrafted floral celebration cake (Dfrdj8QxDGa):
grid2_src = r"C:\Users\INTEL\.gemini\antigravity\brain\0363fd3d-02eb-4749-89e5-8aa119492d5b\browser_sandbox\screenshots\step_12_shot_2_posts_grid_2.png"
if os.path.exists(grid2_src):
    grid2 = Image.open(grid2_src)
    col_w = (769 - 20) / 3
    # Row 1, Col 0 is post 9 (cake and text)
    x1 = int(10 + 0 * col_w + 3)
    x2 = int(10 + 1 * col_w - 3)
    y1 = int(50 + 1 * col_w + 3)
    y2 = int(50 + 2 * col_w - 3)
    crop_floral = grid2.crop((x1, y1, x2, y2))
    target_floral = os.path.join(CUSTOM_DIR, "custom-floral.webp")
    crop_floral.save(target_floral, "WEBP", quality=90)
    print(f"Created authentic custom-floral.webp from Cake Walk Instagram post ({crop_floral.size})")

# Chocolate celebration cake: use genuine Chocochino/Fudge cake photo from products
chocochino_src = os.path.join(PRODUCTS_DIR, "chocochino-cake.webp")
if os.path.exists(chocochino_src):
    im_choco = Image.open(chocochino_src)
    target_choco = os.path.join(CUSTOM_DIR, "custom-chocolate.webp")
    im_choco.save(target_choco, "WEBP", quality=90)
    print(f"Created authentic custom-chocolate.webp from Cake Walk signature cake photograph ({im_choco.size})")

print("\n--- Final Image Audit Verification ---")
all_files = glob.glob(os.path.join(PUBLIC_IMAGES, "**", "*.*"), recursive=True)
for f in all_files:
    ext = os.path.splitext(f)[1].lower()
    with open(f, "rb") as fp:
        head = fp.read(16)
        is_webp = head[:4] == b"RIFF" and head[8:12] == b"WEBP"
        is_jpeg = head[0] == 0xFF and head[1] == 0xD8
        is_svg = b"<svg" in head or b"<?xml" in head
    
    status = "OK (Genuine WebP)" if is_webp and ext == ".webp" else \
             "OK (Genuine JPEG)" if is_jpeg and ext in [".jpg", ".jpeg"] else \
             "OK (Genuine SVG)" if is_svg and ext == ".svg" else f"MISMATCH: ext={ext}, head={head}"
    rel = os.path.relpath(f, PUBLIC_IMAGES)
    print(f"  {rel:<35} | {status}")
