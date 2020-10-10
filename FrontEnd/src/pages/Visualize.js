import React, { useState, useEffect } from 'react';
import { PageHeader, Graph } from '../components';
import { Col, DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import moment, { max } from 'moment';
import "./Visualize.css";


function Visualize() {
  // db와 연동되는 api는 이곳에서 => data 다루는 곳

  const [name, setName] = useState("");
  const [dataSet, setDataSet] = useState([]);
  const [dailySet, setDailySet] = useState([]);
  const [graphDate, setGraphDate] = useState("");
  const [selectedGoalIdx, setSelGoalIdx] = useState(0);
  const [graphRate, setGraphRate] = useState(1);

  useEffect(() => {
    // 여러 데이터를 array로 받기
    getGoalDataFromDB();
  }, []);

  useEffect(()=>{
    calGraphRate();
  },[graphDate, selectedGoalIdx]);

  async function getGoalDataFromDB() {
    // db에서 해당 목표 정보 받아오기
    const dbData = {
      "userId": "user103",
      "userName": "김수람",
      "goals": [
        {
          "goalId": "goal123",
          "title": "python",
          "startDate": "2020/10/22",
          "endDate": "2020/12/31",
          "termGoal": "예제 문제 1개씩 코드로 구현하기",
          "term": 5,
          "hashtags": "coding, commit, python, os",
          "open": true,
          "template": "Line",
          "graphColor": "#FF6B29",
          "dailys": [
            {
              "date": "2020/10/22",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020/10/27",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            },
            {
              "date": "2020/11/01",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/11/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020/11/11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/11/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/11/21",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/11/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            },
            {
              "date": "2020/12/01",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/12/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 80
            },
            {
              "date": "2020/12/11",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020/12/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/12/21",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/12/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            }
          ]
        }
        ,{
          "goalId": "goal124",
          "title": "nodejs",
          "startDate": "2020/10/07",
          "endDate": "2020/12/31",
          "termGoal": "토이 프로젝트 1개씩",
          "term": 10,
          "hashtags": "coding, commit, js, web",
          "open": true,
          "template": "Line",
          "graphColor": "#4EE23E",
          "dailys": [
            {
              "date": "2020/10/07",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/10/17",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            },
            {
              "date": "2020/10/27",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020/11/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 40
            },
            {
              "date": "2020/11/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/11/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 60
            },
            {
              "date": "2020/12/06",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 80
            },
            {
              "date": "2020/12/16",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 20
            },
            {
              "date": "2020/12/26",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 100
            }
          ]
        },{
          "goalId": "goal125",
          "title": "typescript",
          "startDate": "2020/10/02",
          "endDate": "2020/12/31",
          "termGoal": "1 chapter씩",
          "term": 2,
          "hashtags": "coding, commit, js, web, typescript",
          "open": true,
          "template": "Line",
          "graphColor": "#41A0FF",
          "dailys": [
            {
              "date": "2020/10/02",
              "whatIDone": "Chapter 1 clear",
              "value": 100
            },
            {
              "date": "2020/10/04",
              "whatIDone": "Chapter 2 clear",
              "value": 20
            },
            {
              "date": "2020/10/06",
              "whatIDone": "Chapter 3 clear",
              "value": 80
            },
            {
              "date": "2020/10/08",
              "whatIDone": "Chapter 4 clear",
              "value": 20
            },
            {
              "date": "2020/10/10",
              "whatIDone": "예제 문제 2개 코드로 구현하기",
              "value": 0
            }
          ]
        }
      ]
    };

    await processDataToStore(dbData);
  }

  async function processDataToStore(dbData){
    const tmpData = [];
    const tmpDaily = [{"title":"group"}]; // 기본 data와 index를 맞추기 위해 하나 넣어두기
    const tmpGData = [];
    const tmpGroupColor = [];

    let minStartDate = dbData.goals[0].startDate;
    let maxEndDate = dbData.goals[0].endDate;

    await dbData.goals.map(async (goal, index) => {
      // db에서 불러온 data에서 필요한 정보 추출
      await tmpData.push({ // 기본 data 넣기
        "goalId" : goal.goalId,
        "title" : goal.title,
        "startDate" : goal.startDate,
        "endDate" : goal.endDate,
        "template": goal.template,
        "graphColor": goal.graphColor,
        "dataSet" : [] 
      });
      
      await tmpDaily.push({ // daily data 넣기
        "title" : goal.title,
        "dailys": goal.dailys,
        "termGoal" : goal.termGoal,
        "term" : goal.term,
        "hashtags" : goal.hashtags
      });

      await goal.dailys.map((daily, index2)=>{ // 기본 data에 그래프 data 넣기
        tmpData[index+1].dataSet.push({ // 개별 그래프 data
          "date": daily.date,
          "type": goal.title,
          "value" : daily.value
        });
        tmpGData.push({
          "date": (index2+1)+"주기",
          "type" : goal.title,
          "value": daily.value
        });
      });
      tmpGroupColor.push(goal.graphColor); // 그룹 색 지정
    });

    for(const goal in dbData.goals){
      // group 그래프에 넣기 위한 startDate, endDate
      if(Date.parse(minStartDate)>Date.parse(goal.startDate)){
        minStartDate = goal.startDate;
      }
      if(Date.parse(maxEndDate)<Date.parse(goal.endDate)){
        maxEndDate = goal.endDate;
      }
    }
    
    // 기본 data의 앞부분에 그룹 data 넣기
    await tmpData.splice(0,0,{
      "title" : "group",
      "startDate" : minStartDate,
      "endDate" : maxEndDate,
      "template": "Area",
      "graphColor": tmpGroupColor,
      "dataSet": tmpGData
    });

    await setName(dbData.userName); // name setting
    await setDataSet(tmpData); // 개별 graph setting
    await setDailySet(tmpDaily); // daily data setting

    await setGraphDate(maxEndDate); // graph 표시할 날짜 가장 마지막 날짜로 setting
  }

  async function selectGraphDate(_, timeString) {
    if (timeString === null) { // 날짜를 삭제해도 기존 날짜로 유지
      return;
    }

    const selDate = timeString;
    await setGraphDate(selDate);
  }

  function calGraphRate(){
    // datepicker에서 고른 날짜를 전체 기간의 %로 환산하여 표현 
    // => 아래의 slider를 표현하기 위함

    if(dataSet.length===0) // 첫 setting 후 진행
      return;

    const selDate = graphDate;

    const start = dataSet[selectedGoalIdx].startDate;
    const end = dataSet[selectedGoalIdx].endDate;
    const length = Date.parse(end)-Date.parse(start);
    const selLength = Date.parse(selDate)-Date.parse(start);

    if (selLength < 0) {
        alert(`첫 기록 날짜(${start}) 이후의 날짜를 선택해주세요.`);
        return;
    }
    if (length < selLength) { // 선택된 날짜가 마지막 날짜 이후라면
        alert(`마지막 기록 날짜(${end}) 이전의 날짜를 선택해주세요.`);
        return;
    }

    setGraphRate(parseFloat((selLength / length).toFixed(2))); // %로 나타내기
  }
  

  return (
    <Col>
      <PageHeader
        title={name + "님의 목표 달성률"}
        subtitle="목표 달성치를 그래프로 한 눈에 볼 수 있어요."
      />
      <Col>
        <div className="graph-con page-set">
          <div className="select-date-con">
            <div className="date-title"><CalendarOutlined /><p>날짜 선택</p></div>
            <div className="date-select">
              {graphDate !== ""?<DatePicker defaultValue={moment(graphDate)} onChange={selectGraphDate} /> : "로딩중입니다..."}
            </div>
          </div> 
          {graphDate!==""?
            <Graph
              dataSet={dataSet}
              dailySet = {dailySet}
              graphDate = {graphDate}
              graphRate = {graphRate}
              setGraphDate = {setGraphDate}
              selectedGoalIdx = {selectedGoalIdx}
              setSelGoalIdx = {setSelGoalIdx}
            />
            :undefined
          } 
        </div>
      </Col>
    </Col>
  );
}

export default Visualize;