import React, {Fragment} from 'react';

//动态得分表组件
function ScoreSheet(props) {

    var ps = props.ps;
    var namedict = props.namedict;
    var gameTimes = ps.length; //比赛轮数
    //var playerCount = namedict.length; //参赛人数

    //表格第1行
    var row1 = (
        <tr>
            <td colSpan={2}></td>
            {ps.map((v,i) =>
                <td key={i} colSpan={2}>第{v[4]}轮</td>
            )}
        </tr>
    );

    //表格第2行
    var row2 = (
        <tr>
            <td>编号</td>
            <td>姓名</td>
            {ps.map((v,i) =>
                <Fragment key={i}>
                    <td>对手</td>
                    <td>得分</td>
                </Fragment>
            )}
        </tr>
    );

    //表格所有选手得分行
    function getScoreRows() {
        var mainArr = [];
        for(var k in namedict){
            var arr = [namedict[k],k];
            for(var i=0;i<gameTimes*2;i++){
                arr.push(-1);
            }
            mainArr.push(arr);
        }
        ps.map(function (v) {
            for(var j=0;j<mainArr.length;j++){
                if(v[0] === mainArr[j][1]){
                    mainArr[j][2*v[4]] = namedict[v[1]];
                    mainArr[j][2*v[4]+1] = v[2];
                    continue;
                }
            }
            for(var k=0;k<mainArr.length;k++){
                if(v[1] === mainArr[k][1]){
                    mainArr[k][2*v[4]] = namedict[v[0]];
                    mainArr[k][2*v[4]+1] = v[3];
                    continue;
                }
            }
            return 1;
        });
        var scoreRows = (
            mainArr.map((v,i) =>
                <tr key={i}>
                    {v.map((v2,j) =>
                        <td key={j}>{v2!==-1?v2:null}</td>
                    )}
                </tr>
            )
        );
        return scoreRows;
    }
    var scoreRows = getScoreRows();



    //返回整个表格
    return (
        <table className={'tb'}>
            <tbody>
            {row1}
            {row2}
            {scoreRows}
            </tbody>
        </table>
    );
}


export default ScoreSheet;

