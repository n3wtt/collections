import '../style/amiiboItem.css';

const amiiboItem = (props) => {
    console.log("Item");
    console.log(props);

    const Item = {
        'name': 'Sora',
        "imageLocation": './resources/sora.avif',
        'owned': false
    }

    const amiiboItem = props.amiiboItem;

    return (
        <>
            <div class="col amiibo-item col-4">
                <a href="#">
                    <img class="img-responsive size" style={{border: amiiboItem.isOwned ? '5px solid green' : '5px solid red',}} src={amiiboItem.imageLocation} />
                    <div class="caption center-block" style = {{backgroundColor: amiiboItem.isOwned ? 'green' : 'red',}}>
                        {amiiboItem.amiiboName}
                    </div>
                </a>
            </div>
        </>
    )
}

export default amiiboItem;