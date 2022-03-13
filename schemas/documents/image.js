export default {
    name: 'imageDoc',
    title: 'Image',
    type: 'document',
    fields: [
        // image field
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        // caption field
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        // slug from caption
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'caption',
                maxLength: 96
            }
        },
        // count field with default value of 0
        {
            name: 'count',
            title: 'Count',
            type: 'number',
        },

    ],
    initialValue: {
        count: 0
    }
}