import './SendMessagePreview.css';

const SendMessagePreview=({userSendMessage})=>{
    return(
        <div className="send_message_preview_main">
            <span className='send_message_preview_main_span'>
                <p>{userSendMessage|| 'you'}</p>
            </span>
        </div>
    )
}

export default SendMessagePreview;