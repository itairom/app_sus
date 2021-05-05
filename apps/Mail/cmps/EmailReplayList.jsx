import { mailService } from '../services/mail-service.js'


export function EmailReplayList({  replays, }) {
console.log(replays);
    return (
        
                replays.map(replay => {
        <div className="replay-list">
                <li>{replay}</li>
            </div>
        })
    )
}
