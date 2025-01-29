export default async function getBestsellers() {
    const fetchItems = async () => {
        const URL = "https://api.escuelajs.co/api/v1/products";
        const response = await fetch(URL);
        const data = await response.json();
        const promises = data.slice(0, 10).map((item) => Promise.resolve(item));

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
