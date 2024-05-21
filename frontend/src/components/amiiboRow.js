import AmiiboItem from './amiiboItem';
import '../style/amiiboRow.css';


const AmiiboRow = (props) => {


    const rowArray = props.amiiboChunk;
    console.log(rowArray);
    return (
        <div class="row amiibo-row">
            {rowArray.map(item => (
                <AmiiboItem amiiboItem={item} />
            ))}
        </div>
    )
}


export default AmiiboRow;