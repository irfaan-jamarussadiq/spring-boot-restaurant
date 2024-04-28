export type Item = {
    name: string,
    description: string,
    unitPrice: number,
    image: string,
};

type Props = {
    item: Item
}

function MenuItem({ item }: Props) {
    return (
        <div className='MenuItem'>
            <h2 className='item-name'>{item.name}</h2>
            <img className='item-img' src={item.image} alt={item.description} />
            <p className='item-description'>{item.description}</p>
        </div>                            
    );
}

export default MenuItem;