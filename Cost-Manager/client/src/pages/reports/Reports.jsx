// Omer Boucris, 314969817
// Bar Bikovsky, 315941633

import { useContext, useState } from "react";
import Costs from "../../components/costs/Costs";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
import axios from "axios";
import "../reports/reports.css";
import { useEffect } from "react";

export default function Reports() {
  const { user } = useContext(Context);
  const [costs, setCosts] = useState([]);
  const [sum, setSum] = useState();
  const [category, setcategory] = useState("");
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");

  // Sends a request to the server for issuing reports according to filters
  const handleSubmit = async (e) => {
    e.preventDefault();
    var res = await axiosInstance.get(
      `/report?user=${user.username}&category=${category}&month=${month}&year=${year}`
    );
    setSum(res.data.sum);
    setCosts(res.data.costs);
  };

  useEffect(() => {
    localStorage.setItem('costs', JSON.stringify(costs));
  }, [costs]);

  return (
    <div className="report">
      <Costs costs={costs} />
      <div>
        <form className="reportForm" onSubmit={handleSubmit}>
          <select
            type="text"
            onChange={(e) => setcategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Housing">Housing</option>
            <option value="Sport">Sport</option>
            <option value="Education">Education</option>
            <option value="Transportation">Transportation</option>
            <option value="Other">Other</option>
          </select>
          <input type="date.year" placeholder="Year" onChange={(e) => setyear(e.target.value)} />
          <select id="drp1" onChange={(e) => setmonth(e.target.value)}>
            <option value="">All Months</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
          <button className="btnReport" type="submit">
            Get Report
          </button>
        </form>
        <span className="reportTitle">
          Total Costs: {sum}
        </span>
      </div>
    </div>
  );
}
