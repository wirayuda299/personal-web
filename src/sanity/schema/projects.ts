export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
      {
          name: 'title',
          type: 'string',
          title: 'Title',
      },
      {
          name: 'description',
          type: 'text',
          title: 'Description',

      },
      {
          name: 'image',
          type: 'image',
          title: 'Image',
      }

  ]
}