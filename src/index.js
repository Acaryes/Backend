import { Contenedor } from './containers/Container.js'

const ProductContainer = new Contenedor('productos')

ProductContainer.getAll()
	.then((data) => console.log({ data }))
	.catch((error) => console.log({ error }))

ProductContainer.save([
	{
		title: 'Producto 1',
		price: 300,
		thumbnail: 'miniatura.jpg',
		id: 1,
	},
	{
		title: 'Producto 2',
		price: 300,
		thumbnail: 'miniatura.jpg',
		id: 2,
	},
	{
		title: 'Producto 3',
		price: 300,
		thumbnail: 'miniatura.jpg',
		id: 3,
	},
])
	.then((data) => console.log({ data }))
	.catch((error) => console.log({ error }))

ProductContainer.getById(1)
	.then((data) => console.log({ data }))
	.catch((error) => console.log({ error }))

ProductContainer.deleteById(2).then((data) => console.log({ data }))
ProductContainer.deleteAll()
