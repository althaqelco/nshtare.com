from PIL import Image
import rembg
import sys

try:
    input_path = "public/images/logo/nshtare-logo.webp"
    img = Image.open(input_path)
    output_img = rembg.remove(img)
    output_path = "public/images/logo/nshtare-logo-transparent.png"
    output_img.save(output_path)
    print(f"Original size: {img.size}")

    width, height = output_img.size
    size = max(width, height)
    icon = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    icon.paste(output_img, ((size - width) // 2, (size - height) // 2))
    
    # Generate standard favicons
    icon_512 = icon.resize((512, 512), Image.Resampling.LANCZOS)
    icon_512.save("public/icon-512.png")
    
    icon_192 = icon.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save("public/icon-192.png")
    
    icon_apple = icon.resize((180, 180), Image.Resampling.LANCZOS)
    icon_apple.save("public/apple-icon.png")
    
    icon_32 = icon.resize((32, 32), Image.Resampling.LANCZOS)
    icon_32.save("public/favicon.ico", format="ICO")
    icon_32.save("public/icon.png")

    print("Logo processed and favicons generated successfully!")
except Exception as e:
    print(f"Error processing logo: {e}")
    sys.exit(1)
