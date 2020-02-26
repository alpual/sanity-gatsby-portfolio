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
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them. It will also determine sort order, with newer dates higher on the page.',
      type: 'datetime'
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
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'image'
    },
    prepare({ title = 'Work by Neil Nelson', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM');
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
