import './GetMessagePreview.css';

const GetMessagePreview=({userGetMessage})=>{
    return(
        <div className="get_message_preview_main">
            <span className='get_message_preview_main_span'>
                <p>{userGetMessage||'some one'}</p>
            </span>
        </div>
    )
}

export default GetMessagePreview;