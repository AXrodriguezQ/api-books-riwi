
type BookType = {
    id: number;
    title: string;
    amount?: number;
    sales?: number;
    price: number;
    authorId: number
}

export const allBooks: BookType[] = [

    {
        id: 1,
        title: 'The Lord of the Rings',
        amount: 10,
        sales: 5,
        price: 100,
        authorId: 1
    },
    {
        id: 2,
        title: 'Harry Potter',
        amount: 80,
        sales: 10,
        price: 100,
        authorId: 1
    },
    {
        id: 3,
        title: 'El secreto',
        amount: 10,
        authorId: 2,
        price: 80
    },

]
