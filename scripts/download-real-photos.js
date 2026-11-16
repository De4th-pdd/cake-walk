const fs = require('fs');
const path = require('path');
const https = require('https');

const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

const images = [
  {
    name: 'classic-churros.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209823/a2e0dfff-161b-43e3-a755-a13ea35bc259.jpg?width=600&height=600'
  },
  {
    name: 'churros-platter.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209824/4cda213e-c3cb-483b-a2c6-cd3769f57940.jpg?width=600&height=600'
  },
  {
    name: 'loaded-churros.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209825/bffef3ce-31d4-4ffd-97f4-ef0b9c2aa1dc.jpg?width=600&height=600'
  },
  {
    name: 'churro-waffle.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209826/05d16c16-4b3f-46fb-a8f0-958cce0d6187.jpg?width=600&height=600'
  },
  {
    name: 'chocochino-cake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/100904391-parent/9869c695-7b7b-4e57-a6ab-71af57a5423b.jpg?width=600&height=600'
  },
  {
    name: 'double-chocolate-fudge-cake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/100904392-parent/5874ebb7-0156-46c5-8622-e442b6ba7008.jpg?width=600&height=600'
  },
  {
    name: 'vanilla-caramel-crunch-cake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/100904393-parent/9abe0696-28d8-471b-8d4b-28139eed6228.jpg?width=600&height=600'
  },
  {
    name: 'lotus-tres-leches.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209835/a5006336-573b-4cd9-9a44-fe4f36a94fe1.jpg?width=600&height=600'
  },
  {
    name: 'ny-cheesecake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/100904374-parent/88e18895-bea2-45ff-a8bd-2fbcee227b8c.jpg?width=600&height=600'
  },
  {
    name: 'molten-lava-cake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209862/083a34a1-8cfc-4ba9-b7bc-03dab8461cbb.jpg?width=600&height=600'
  },
  {
    name: 'chocolate-fudge-brownie.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209838/bad3c042-2a3a-4023-a2f8-1dd16b7e93f1.jpg?width=600&height=600'
  },
  {
    name: 'walnut-brownie.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209839/036acce4-2003-4809-905b-5a275cb6ab2f.jpg?width=600&height=600'
  },
  {
    name: 'lemon-tart.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209840/e4f42608-3857-442d-8181-58c847a89759.jpg?width=600&height=600'
  },
  {
    name: 'apple-pie.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209841/c5768690-1413-4ec9-ab4a-1ff5c64ec122.jpg?width=600&height=600'
  },
  {
    name: 'banana-bread.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209842/ed1cd7b1-79ca-4f4b-b534-dcc690a525e2.jpg?width=600&height=600'
  },
  {
    name: 'chocolate-chip-cookie.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209848/45e785f7-38c9-4f3a-a2af-28a8b7b30be4.jpg?width=600&height=600'
  },
  {
    name: 'dark-chocolate-cookie.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209849/d98eb000-572c-4e71-b82a-9426d5f9a03b.jpg?width=600&height=600'
  },
  {
    name: 'lotus-biscoff-cupcake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209843/b757f4c2-733b-4d5b-900c-41d4d352c0fd.jpg?width=600&height=600'
  },
  {
    name: 'nutella-cupcake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209844/2c1fb6cd-49cb-42fd-a975-396f95b9a91e.jpg?width=600&height=600'
  },
  {
    name: 'chocolate-fudge-cupcake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209845/2723429c-cd91-4b88-9637-7726810044c9.jpg?width=600&height=600'
  },
  {
    name: 'oreo-cupcake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209846/b29c8e2c-7e99-4396-9606-0d4b680242a4.jpg?width=600&height=600'
  },
  {
    name: 'red-velvet-cupcake.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209847/48901ec1-58d7-4ffc-8179-eac4c8d2ed90.jpg?width=600&height=600'
  },
  {
    name: 'hot-chocolate.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209852/b8bcc128-4de0-4d00-b4e1-83065cb282ca.jpg?width=600&height=600'
  },
  {
    name: 'karak-chai.webp',
    url: 'https://foodpanda.dhmedia.io/image/global-menu-service/FP_PK/vendor/vxfz/product/104209853/073cfa2d-71ce-4302-ad44-4d1bfcd12c2c.jpg?width=600&height=600'
  },
  {
    name: '../hero-banner.webp',
    url: 'https://foodpanda.dhmedia.io/image/fd-pk/LH/vxfz-listing.jpg?width=1200&height=800'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(productsDir, item.name);
    const file = fs.createWriteStream(dest);
    
    https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(item.name); });
        }).on('error', reject);
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(item.name); });
      } else {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed with status ${response.statusCode} for ${item.url}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Downloading ${images.length} genuine photos...`);
  for (const item of images) {
    try {
      await download(item);
      console.log(`✓ Downloaded ${item.name}`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All downloads finished!');
}

run();
