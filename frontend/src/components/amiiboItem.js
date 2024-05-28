import '../style/amiiboItem.css';

const amiiboItem = ({amiiboItem}) => {

    const Item = {
        'name': 'Sora',
        "imageLocation": './resources/sora.avif',
        'owned': false
    }
    console.log(`./resources/photos/images${amiiboItem.img_source}`);

    return (
        <>
            <div class="col amiibo-item col-4">
                <a href="#">
                    <img className="img-responsive size" style={{border: amiiboItem.isOwned ? '5px solid green' : '5px solid red',}} src={`./resources/images/${amiiboItem.img_source}`} />
                    <div className="caption center-block" style = {{backgroundColor: amiiboItem.isOwned ? 'green' : 'red',}}>
                        {amiiboItem.name}
                    </div>
                </a>
            </div>
        </>
    )
}

export default amiiboItem;