import AmiiboTitle from './amiiboTitle'
import AmiiboRow from './amiiboRow'
import amiiboItem from './amiiboItem';


const AmiiboList = (props) => {
    const Item = 
    [
        {
            id:1,
            amiiboName: 'Sora',
            imageLocation: './resources/sora.avif',
            isOwned: false
        },
        {
            id:2,
            amiiboName: 'Noah',
            imageLocation: './resources/noah.avif',
            isOwned: false
        },
        {
            id:3,
            amiiboName: 'Sora',
            imageLocation: './resources/sora.avif',
            isOwned: false
        },
        {
            id:4,
            amiiboName: 'big-man',
            imageLocation: './resources/big-man.avif',
            isOwned: true
        },
    ];
    const chunkArray = (arr, size=3) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
          );
    };

    const chunkedArray = chunkArray(Item, 3);
    console.log(chunkedArray);

    return (
    <>
        <div>
            <AmiiboTitle />
        </div>
        <div class='container'>
            {chunkedArray.map(item => (
                <AmiiboRow amiiboChunk={item} />
            ))}
        </div>
    </>
    );
}

export default AmiiboList;