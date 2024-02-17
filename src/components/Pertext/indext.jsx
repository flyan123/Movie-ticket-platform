import React, { useState } from 'react';
import perstyle from './per.module.less'

const Pertext = () => {

    // const [name,setName]=useState('')
    return (
        <div>
{/* 一、一部分 */}
            {/*1.  基本信息 */}
            <div className={perstyle.basenext}>
                基本信息
            </div>

            <hr />
{/* 二、 二部分 */}
            <div className={perstyle.erpart}>
                {/* 2.图片之类信息 */}
            <div>
                {/* 图片 */}
                <img className={perstyle.tu}
                    src="https://img.meituan.net/avatar/33e4cff85b4d852e598b689afdf21cca10857.jpg"
                />
                
                <div className={perstyle.input}>
                    <input type="button" className={perstyle.changetox} value="更换头像" />
                    {/*  */}
                    {/* <input type="file" id="fileUpload" name="file" /> */}
                    
                </div>
                <div className={perstyle.tips} >支持JPG,JPEG,PNG格式,且文件需小于1M</div>
            </div>
            
            {/* 3.表格 */}
            <form id="J-userexinfo-form" className={perstyle.table}>
                    {/* 1昵称： */}
                <div className={perstyle.name} class="userexinfo-form-section">
                    <label>
                    昵称：
                    <input 
                    placeholder="用户名"
                    style={{width: "250px", height: "34px"}}
                    // onChange={(e)=>setName(e.target.value)}
                    // value={name}
                    />
                    </label>
                </div>
                    {/* 2性别： */}
                <div className={perstyle.sex}>
                    <label>
                    性别：
                    <span>
                        <input type="radio" name="gender" id="userexinfo-form-gender-1" value="1" />
                        <label for="userexinfo-form-gender-1">男</label>
                    </span>
                    <span style={{margin:'0px 20px'}}>
                        <input type="radio" name="gender" id="userexinfo-form-gender-2" value="2" />
                        <label for="userexinfo-form-gender-2">女</label>
                    </span>
                    </label>
                    
                </div>
                    {/* 3生日： */}
                <div class="date-picker userexinfo-form-section">
                    <label>
                    生日：
                       {/* 年 */}
                    <span>
                        {/* <div class="ui-select"> */}
                        <select name="year" class="ui-select">
                            <option>--</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001" selected="">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                        </select>
                        {/* </div> */}
                        <span class="tip">年</span>
                    </span>
                    {/* 月 */}
                    <span style={{margin:'0px 20px'}}>
                        {/* <div class="ui-select"> */}
                        <select name="month" class="ui-select">
                            <option>--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11" selected="">11</option>
                            <option value="12">12</option>
                        </select>
                        {/* </div> */}
                        <span class="tip">月</span>
                    </span>
                    {/* 日 */}
                    <span>
                        {/* <div class="ui-select"> */}
                        <select name="day" class="ui-select">
                            <option>--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24" selected="">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                        {/* </div> */}
                        <span class="tip">日</span>
                    </span>
                    </label>
                </div>

                  {/* 4个性签名： */}
                <div className={perstyle.userexinfo} >
                    <label>
                    个性签名：
                    <span>
                        <input 
                        style={{width: "220px", height: "50px"}}
                        type="text" 
                        placeholder="20个字以内"
                           />
                    </span>
                    </label>
                    
                </div>

                <div >
                    <button
                    type="button"
                    className={perstyle.bottom}
                    >保存</button>
                </div>
            </form>
        
            </div>

        </div>
    )
}
export default Pertext
