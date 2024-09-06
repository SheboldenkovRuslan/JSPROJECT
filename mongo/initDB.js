db.createCollection("medicine", {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'vendor_code',
                'name',
                'manufacture_country',
                'manufacture_company',
                'count_in_package',
                'prescription',
                'description',
                'expiration_date',
                'category_id',
                'price'
            ],
            properties: {
                vendor_code: {
                    bsonType: 'int',
                    description: 'medicine vendor code'
                },
                name: {
                    bsonType: 'string',
                    description: 'medicine name'
                },
                manufacture_country: {
                    bsonType: 'string',
                    description: 'medicine manufacture country'
                },
                manufacture_company: {
                    bsonType: 'string',
                    description: 'medicine manufacture company'
                },
                count_in_package: {
                    bsonType: 'int',
                    description: 'medicine count in package'
                },
                prescription: {
                    bsonType: 'bool',
                    description: 'medicine prescription'
                },
                description: {
                    bsonType: 'string',
                    description: 'medicine description'
                },
                expiration_date: {
                    bsonType: 'int',
                    description: 'medicine expiration date'
                },
                price: {
                    bsonType: 'int',
                    description: 'medicine price'
                }
            }
        }
    }
})

