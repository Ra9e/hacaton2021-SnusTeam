import React from 'react';
import './selectConsume.css'


const SelectConsume = () => {

    return (
        <div className='calc_line'>
            <div className="calc_line type_private">
                <div>Потребление зимой в месяц:</div>
                <div className="disp">
                    <div>
                        <input type="text" name="Wz" value="20" pattern="^[ 0-9]+$"/>
                        <span>кВт⋅ч</span>
                    </div>
                </div>
            </div>
            <div className="calc_line type_private">
                <div>Потребление летом в месяц:</div>
                <div className="disp">
                    <div>
                        <input type="text" name="Wl" value="35" pattern="^[ 0-9]+$"/><span>кВт⋅ч</span>
                    </div>
                </div>
            </div>
        </div>
)
}
export default SelectConsume