import React,{useEffect, useState} from "react";
import * as S from "./styles";
import {getTasks} from '../../services/task'
import { PieChart, Pie, Cell ,Tooltip, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#FF8042"]; // Mavi: Completed, Turuncu: Not Completed

function HomePageContainer() {
  const [tasks, setTasks] = useState([]);
  // const [todaysTask, setTodaysTask] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);

      //bugünün tarihini al YYYY-MM-DD
      // const today= new Date().toISOString().split("T")[0];

      //bugüne ait ve tamamlanmamış görevleri filtrele
      // const filteredTasks = allTasks.filter(
      //   (task) => task.dueDate === today && !task.completed
      // );

      // setTodaysTask(filteredTasks);

      //grafik gösterimi için
      //tamamlanan ve tamamlanmayan görevleri say
      const completedCount = allTasks.filter((task) => task.completed).length;
      const notCompletedCount = allTasks.length - completedCount;

      setChartData([
        {name: "Completed" , count: completedCount},
        {name: "Not Completed" , count: notCompletedCount},
      ])
    }
    fetchTasks()
  },[])


  return (
    <S.HomePageContainer>
      <S.Title>
        Welcome <span>Feyzanur</span>
      </S.Title>
      {/* <S.Text>
      {todaysTask.length} görev tamamlanmamış
      </S.Text> */}
      
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartData} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
          {chartData.map((entry,index) => (
            <Cell  key={`cell-${index}`} fill={colors[index]}/>
          ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <S.FlexDiv>
      <S.Header>
      Today's motivational quote:
      </S.Header>
      <S.Text>
       'Well started is half done!'
      </S.Text>
      </S.FlexDiv>

    </S.HomePageContainer>
  );
}

export { HomePageContainer };