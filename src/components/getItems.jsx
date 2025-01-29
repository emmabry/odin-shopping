export default async function getItems( { num }) {
    const fetchItems = async () => {
        const URL = `https://api.escuelajs.co/api/v1/products/?categoryId=${num}`
        console.log(URL)
        const response = await fetch(URL);
        const data = await response.json();
        const promises = data.map((item) => Promise.resolve(item));

        const results = await Promise.all(promises);
        const itemData = results.map((data) => ({
            name: data.title,
            id: data.id,
            price: data.price,
            image: data.images[0]
        }));

        return itemData;
    };

    return fetchItems();
}
