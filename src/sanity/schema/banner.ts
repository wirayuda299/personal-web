export default {
    name: 'banner',
    type: 'document',
    title: 'Banner',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtext',
            type: 'string',
            title: 'SubText'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'background',
            type: 'image',
            title: 'Background'
        },
        {
            name: 'techstack',
            type: 'array',
            title: 'TechStack',
            of: [{type: 'image'}]
        }
    ]
}