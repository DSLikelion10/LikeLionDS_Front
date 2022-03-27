import React from 'react';
import '../css/History_staff.css';

class Staff extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile: []
        }
    }
  return () {
    return (
        <div className='container'>
            <div className='App'>
            <h1>메모장</h1><br/><br/>
                <table>
                    <tbody>
                    <tr className='trList'>
                            {this.state.memos.map( (memo,index)=>
                            <td className='cell' key={index} onClick={()=>this.reopenModal(index)}>
                                <div className='inner'>
                                    <h2>{memo.title}</h2>
                                    <h5>{memo.author}</h5><br/><br/>
                                    <h4>{memo.content}</h4><br/>
                                </div>
                            </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
     }
}
export default Staff;
