/**
 * Created by chenjinxin on 2017/3/25.
 */
import fetch from '../config/fetch';
import * as city from './tempdata/city'


// 获取首页默认地址
let cityGuess = () => fetch('GET', './tempdata/city');

export default cityGuess
