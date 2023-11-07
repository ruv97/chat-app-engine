import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div className="background">
            <PrettyChatWindow
                projectId='7d7d97ee-dbb3-414e-ab74-ade1a605c6ca'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage