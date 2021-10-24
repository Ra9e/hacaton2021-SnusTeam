import React from 'react';
import './selectSB.css'


const SelectSB = () => {

    return (
        <div>
        <div class="location_select">
                    <select id="calc_sbtype" tabindex="-1">
                    <option value="50">Солнечная батарея 50Вт</option>
                    <option value="100">Солнечная батарея 100Вт</option>
                    <option value="150">Солнечная батарея 150Вт</option>
                    <option value="200">Солнечная батарея 200Вт</option>
                    <option value="250">Солнечная батарея 250Вт</option>
                    <option value="300">Солнечная батарея 300Вт</option>
                    <option value="350">Солнечная батарея 350Вт</option>
                    </select>
                </div>
            <div class="selectric-items" tabindex="-1"></div>
        <div class="location_block1_kolvo">
            <div class="location_block1_title">Укажите количество СБ</div>

            <div class="inp_cont">
                <input class="ugol_inp" min="1" step="1" type="number" value="1" />
                <div class="calc_arrow_top"></div>
                <div class="calc_arrow_down"></div>
            </div>
        </div>

        <div class="location_block1_ugol">
            <div class="location_ugol">
                <div id="lea_solar_calc_ugol_radio" >
                    <label>
                        <input name="lea_solar_calc_ugol_radio" type="radio" value="0"/>
                        <span class="checkmarkr"></span>
                        <span
                    class="cms_calc_ugol_val">0</span><sup>0</sup>&nbsp;&nbsp;Вертикально
                    </label>
                    <label>
                        <input name="lea_solar_calc_ugol_radio" type="radio" value="45"/>
                        <span class="checkmarkr"></span>
                        <span class="cms_calc_ugol_val">45</span><sup>0</sup>&nbsp;Лето
                    </label>
                    <label>
                        <input name="lea_solar_calc_ugol_radio" type="radio" value="60"/>
                            <span class="checkmarkr"/><span class="cms_calc_ugol_val">60</span><sup>0</sup>&nbsp;Оптиммум
                    </label>
                    <label>
                        <input name="lea_solar_calc_ugol_radio" type="radio" value="75"/>
                        <span class="checkmarkr"></span>
                        <span class="cms_calc_ugol_val">75</span><sup>0</sup>&nbsp;Зима
                    </label>
                    <label>
                        <input checked="checked" name="lea_solar_calc_ugol_radio" type="radio" value="90"/>
                        <span class="checkmarkr"></span>
                        <span class="cms_calc_ugol_val">90</span><sup>0</sup>&nbsp;Горизонт.
                </label>
                </div>
            </div>

            <div class="location_block1_kolvo">
                <div class="location_block1_title">Угол наклона:&nbsp;</div>

                <div class="inp_cont">
                    <input class="ugol_inp" placeholder="Угол наклона" step="5" type="number" value="90"/>
                    <div class="calc_arrow_top"></div>
                    <div class="calc_arrow_down"></div>
                </div>
            </div>
        </div>
        </div>
            )
            }
export default SelectSB