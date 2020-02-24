export default {
  name: 'homepageCarousel',
  title: 'Homepage Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image'
    },
    prepare({ title = 'Work by Neil Nelson', slug = {}, media }) {
      return {
        title,
        media
      }
    }
  }
}
