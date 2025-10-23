import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Sreem',

  projectId: '65mhdho2',
  dataset: 'sreem_collection',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Products')
              .child(
                S.list()
                  .title('Product Categories')
                  .items([
                    // Sarees Section
                    S.listItem()
                      .title('Sarees')
                      .child(
                        S.documentList()
                          .title('Sarees')
                          .filter('_type == "product" && category == "sarees"')
                          .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
                          .menuItems([
                            S.orderingMenuItem({name: 'createdDesc', title: 'Newest First', by: [{field: '_createdAt', direction: 'desc'}]}),
                            S.orderingMenuItem({name: 'createdAsc', title: 'Oldest First', by: [{field: '_createdAt', direction: 'asc'}]}),
                            S.orderingMenuItem({name: 'nameAsc', title: 'Name A-Z', by: [{field: 'name', direction: 'asc'}]}),
                            S.orderingMenuItem({name: 'nameDesc', title: 'Name Z-A', by: [{field: 'name', direction: 'desc'}]}),
                            S.orderingMenuItem({name: 'priceAsc', title: 'Price: Low to High', by: [{field: 'price', direction: 'asc'}]}),
                            S.orderingMenuItem({name: 'priceDesc', title: 'Price: High to Low', by: [{field: 'price', direction: 'desc'}]}),
                            S.orderingMenuItem({name: 'featured', title: 'Featured First', by: [{field: 'featured', direction: 'desc'}]}),
                            S.orderingMenuItem({name: 'inStock', title: 'In Stock First', by: [{field: 'inStock', direction: 'desc'}]}),
                            S.orderingMenuItem({name: 'outOfStock', title: 'Out of Stock First', by: [{field: 'inStock', direction: 'asc'}]}),
                          ])
                          .canHandleIntent((intentName, params) => {
                            // Handle creation intent for sarees
                            return intentName === 'create' && params.type === 'product'
                          })
                          .child((documentId) =>
                            S.document()
                              .documentId(documentId)
                              .schemaType('product')
                          )
                          .initialValueTemplates([
                            S.initialValueTemplateItem('saree-product', {category: 'sarees'})
                          ])
                      ),
                    
                    // Jewelry Section with subcategories
                    S.listItem()
                      .title('Jewelry')
                      .child(
                        S.list()
                          .title('Jewelry Types')
                          .items([
                            // Panchaloha Jewelry
                            S.listItem()
                              .title('Panchaloha')
                              .child(
                                S.documentList()
                                  .title('Panchaloha Jewelry')
                                  .filter('_type == "product" && category == "jewelry" && collection == "Panchaloha"')
                                  .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
                                  .menuItems([
                                    S.orderingMenuItem({name: 'createdDesc', title: 'Newest First', by: [{field: '_createdAt', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'createdAsc', title: 'Oldest First', by: [{field: '_createdAt', direction: 'asc'}]}),
                                    S.orderingMenuItem({name: 'nameAsc', title: 'Name A-Z', by: [{field: 'name', direction: 'asc'}]}),
                                    S.orderingMenuItem({name: 'nameDesc', title: 'Name Z-A', by: [{field: 'name', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'priceAsc', title: 'Price: Low to High', by: [{field: 'price', direction: 'asc'}]}),
                                    S.orderingMenuItem({name: 'priceDesc', title: 'Price: High to Low', by: [{field: 'price', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'featured', title: 'Featured First', by: [{field: 'featured', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'inStock', title: 'In Stock First', by: [{field: 'inStock', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'outOfStock', title: 'Out of Stock First', by: [{field: 'inStock', direction: 'asc'}]}),
                                  ])
                                  .initialValueTemplates([
                                    S.initialValueTemplateItem('panchaloha-product', {
                                      category: 'jewelry',
                                      collection: 'Panchaloha'
                                    })
                                  ])
                              ),
                            
                            // Silver Jewelry
                            S.listItem()
                              .title('Silver')
                              .child(
                                S.documentList()
                                  .title('Silver Jewelry')
                                  .filter('_type == "product" && category == "jewelry" && collection == "Silver"')
                                  .defaultOrdering([{field: '_createdAt', direction: 'desc'}])
                                  .menuItems([
                                    S.orderingMenuItem({name: 'createdDesc', title: 'Newest First', by: [{field: '_createdAt', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'createdAsc', title: 'Oldest First', by: [{field: '_createdAt', direction: 'asc'}]}),
                                    S.orderingMenuItem({name: 'nameAsc', title: 'Name A-Z', by: [{field: 'name', direction: 'asc'}]}),
                                    S.orderingMenuItem({name: 'nameDesc', title: 'Name Z-A', by: [{field: 'name', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'priceAsc', title: 'Price: Low to High', by: [{field: 'price', direction: 'asc'}]}),
                                    S.orderingMenuItem({name: 'priceDesc', title: 'Price: High to Low', by: [{field: 'price', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'featured', title: 'Featured First', by: [{field: 'featured', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'inStock', title: 'In Stock First', by: [{field: 'inStock', direction: 'desc'}]}),
                                    S.orderingMenuItem({name: 'outOfStock', title: 'Out of Stock First', by: [{field: 'inStock', direction: 'asc'}]}),
                                  ])
                                  .initialValueTemplates([
                                    S.initialValueTemplateItem('silver-product', {
                                      category: 'jewelry',
                                      collection: 'Silver'
                                    })
                                  ])
                              ),
                          ])
                      ),
                  ])
              ),
          ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev,
      {
        id: 'saree-product',
        title: 'Saree',
        schemaType: 'product',
        value: {
          category: 'sarees',
        },
      },
      {
        id: 'panchaloha-product',
        title: 'Panchaloha Jewelry',
        schemaType: 'product',
        value: {
          category: 'jewelry',
          collection: 'Panchaloha',
          material: 'Panchaloha',
        },
      },
      {
        id: 'silver-product',
        title: 'Silver Jewelry',
        schemaType: 'product',
        value: {
          category: 'jewelry',
          collection: 'Silver',
          material: 'Silver',
        },
      },
    ],
  },
})
