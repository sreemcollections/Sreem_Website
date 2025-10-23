import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price (MRP)',
      type: 'number',
      validation: (Rule) => Rule.positive(),
      description: 'Used to calculate discount percentage',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Sarees', value: 'sarees'},
          {title: 'Jewelry', value: 'jewelry'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      readOnly: ({document}) => !!(document?.category), // Make readonly if already set
      hidden: true, // Hide this field completely since it's set by the template
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
      description: 'e.g., Banarasi, Kanjivaram, Panchaloha, Silver, etc.',
      readOnly: ({document}) => document?.category === 'jewelry' && !!(document?.collection), // Make readonly for jewelry if already set
      hidden: ({document}) => document?.category === 'sarees', // Hide for sarees in the structured navigation
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      hidden: ({document}) => document?.category !== 'jewelry',
      description: 'e.g., Gold, Silver, Pearl',
    }),
    defineField({
      name: 'fabric',
      title: 'Fabric',
      type: 'string',
      hidden: ({document}) => document?.category !== 'sarees',
      description: 'e.g., Silk, Cotton, Georgette',
    }),
    defineField({
      name: 'length',
      title: 'Length',
      type: 'string',
      hidden: true, // Hide length field for sarees
      description: 'e.g., 6.5 meters',
    }),
    defineField({
      name: 'blousePiece',
      title: 'Blouse Piece Included',
      type: 'boolean',
      hidden: true, // Hide blouse piece field for sarees
      initialValue: true,
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
      hidden: true, // Hide weight field
      description: 'e.g., 25 grams',
    }),
    defineField({
      name: 'purity',
      title: 'Purity',
      type: 'string',
      hidden: true, // Hide purity field
      description: 'e.g., 22K, 18K, 925 Silver',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage and featured sections',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1),
      description: 'Upload at least one image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      price: 'price',
      category: 'category',
    },
    prepare(selection) {
      const {title, media, price, category} = selection
      return {
        title: title,
        subtitle: `${category} - ₹${price?.toLocaleString('en-IN')}`,
        media: media,
      }
    },
  },
})
