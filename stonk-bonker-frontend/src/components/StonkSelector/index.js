import { useEffect, useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

import "./index.css";
const StonkSelector = () => {
	const [stonkList, setStonkList] = useState(["Loading..."]);
	const [selectedStonkList, setSelectedStonkList] = useState([]);

	const handleChange = (event) => {
		setSelectedStonkList(event.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			setStonkList(["Tata Power", "ITC Ltd.", "M&M", "SBI Equity Fund"]);
		}, 2000);
	}, []);

	return (
		<div className="stonk-selector-base">
			<FormControl className="stonk-selector-formcontrol">
				<InputLabel>Pick Up Your Stonks</InputLabel>
				<Select
					multiple
					value={selectedStonkList}
					onChange={handleChange}
					input={<Input />}
					renderValue={(selected) => selected.join(", ")}>
					{stonkList.map((stonk) => (
						<MenuItem key={stonk} value={stonk}>
							<Checkbox checked={selectedStonkList.indexOf(stonk) > -1} />
							<ListItemText primary={stonk} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default StonkSelector;
