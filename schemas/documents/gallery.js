export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'imageDoc',
                        },
                    ]
                },
            ]
        },
    ],
}