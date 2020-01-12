import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Spa from "@material-ui/icons/Spa";
import RestoreIcon from "@material-ui/icons/Restore";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import { Link } from "react-router-dom";

const Navigation = () => {
	const useStyles = makeStyles({
		root: {
			width: 1000
		}
	});

	const classes = useStyles();
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6" style={{ flexGrow: "1" }}>
						DailyBOOST
					</Typography>

					<Typography>
						<Button color="inherit">Login</Button>
					</Typography>

					{/* <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/"></Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about"></Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/dashboard"></Link>
                    </li>
                </ul> */}
				</Toolbar>
			</AppBar>

			<BottomNavigation
				value={value}
				onChange={handleChange}
				className={classes.root}
			>
				<BottomNavigationAction
					label="Recents"
					value="recents"
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction
					label="Quiz"
					value="quiz"
					icon={<LibraryBooksIcon />}
				/>
				<BottomNavigationAction
					label="Activities"
					value="activities"
					icon={<Spa />}
				/>
				<BottomNavigationAction
					label="Meet-Up"
					value="meet-up"
					icon={<LocationOnIcon />}
				/>
			</BottomNavigation>
		</>
	);
};

export default Navigation;
