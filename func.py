import deeppyer, asyncio
from PIL import Image, ImageOps, ImageEnhance

async def main():
   
  img = Image.open("/Users/dan/Desktop/huss.jpeg")
  img = await deeppyer.deepfry(img,token='54daf673266b4e24a889c8888bbc73e0')
  img.save('./bar.jpg')


loop = asyncio.get_event_loop()
loop.run_until_complete(main())