import {graphql, HttpResponse} from 'msw';

export const handlers = [
  graphql.query('Header', ({query}) => {
    console.log('Intercepted a "RecommendedProducts" GraphQL query:', query);
    return HttpResponse.json({
      data: {
        shop: {
          id: 'gid://shopify/Shop/68817551382',
          name: 'Mock.shop',
          description: '',
          primaryDomain: {url: 'https://demostore.mock.shop'},
          brand: {logo: null},
        },
        menu: {
          id: 'gid://shopify/Menu/212407386134',
          items: [
            {
              id: 'gid://shopify/MenuItem/494783037462',
              resourceId: 'gid://shopify/Collection/429493780502',
              tags: [],
              title: 'Men',
              type: 'COLLECTION',
              url: 'https://demostore.mock.shop/collections/men',
              items: [],
            },
            {
              id: 'gid://shopify/MenuItem/494783070230',
              resourceId: 'gid://shopify/Collection/429493813270',
              tags: [],
              title: 'Women',
              type: 'COLLECTION',
              url: 'https://demostore.mock.shop/collections/women',
              items: [],
            },
            {
              id: 'gid://shopify/MenuItem/494879670294',
              resourceId: 'gid://shopify/Collection/429493846038',
              tags: [],
              title: 'Unisex',
              type: 'COLLECTION',
              url: 'https://demostore.mock.shop/collections/unisex',
              items: [],
            },
            {
              id: 'gid://shopify/MenuItem/496942514198',
              resourceId: null,
              tags: [],
              title: 'Collections',
              type: 'COLLECTIONS',
              url: 'https://demostore.mock.shop/collections',
              items: [],
            },
            {
              id: 'gid://shopify/MenuItem/496942546966',
              resourceId: 'gid://shopify/Blog/91450966038',
              tags: [],
              title: 'News',
              type: 'BLOG',
              url: 'https://demostore.mock.shop/blogs/news',
              items: [],
            },
          ],
        },
      },
    });
  }),
];
