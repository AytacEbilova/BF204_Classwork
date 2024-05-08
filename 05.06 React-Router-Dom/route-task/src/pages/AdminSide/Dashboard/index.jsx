import * as React from "react";
import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { getAll } from "../../../services/request";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    xAxisData: [],
    barData: []
  });
  const [religionData, setReligionData] = useState([]);

  useEffect(() => {
    getAll('/countries').then((response) => {
      setData(response.data);
      updateData(response.data);
      updateReligionData(response.data);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);


  const updateData = (data) => {
    const xAxisData = data.map(item => item.name);
    const barData = data.map(item => item.population);

    setChartData({
      xAxisData,
      barData
    });
  };


  const updateReligionData = (data) => {
    const religionPopulation = {};

    data.forEach((country) => {
      if (religionPopulation[country.religion]) {
        religionPopulation[country.religion] += country.population;
      } else {
        religionPopulation[country.religion] = country.population;
      }
    });

    const pieData = Object.keys(religionPopulation).map(religion => ({
      id: religion,
      value: religionPopulation[religion],
      label: religion
    }));

    setReligionData(pieData);
  };

  return (
    <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BarChart
        xAxis={[{ scaleType: "band", data: chartData.xAxisData }]}
        series={[{ data: chartData.barData }]}
        width={500}
        height={300}
      />
      <PieChart
        series={[{
          data: religionData
        }]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Dashboard;
