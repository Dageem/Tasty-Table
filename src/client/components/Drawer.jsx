import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function DrawerWithNavigation({ open, closeDrawer }) {
  return (
    <React.Fragment>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Search Recipes
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full border border-black rounded-lg p-2"
          />
        </div>
        <Typography variant="h6" color="blue-gray" className="p-4">
          Popular Recipe Searches
        </Typography>
        <List>
          <ListItem>
            <Link to="/categories/easy">Easy</Link>
          </ListItem>
          <ListItem><Link to="/categories/quick">Quick</Link></ListItem>
          <ListItem><Link to="/categories/chinese">Chinese</Link></ListItem>
          <ListItem><Link to="/categories/mexican">Mexican</Link></ListItem>
          <ListItem><Link to="/categories/thai">Thai</Link></ListItem>
          <ListItem><Link to="/categories/indian">Indian</Link></ListItem>
          <ListItem><Link to="/categories/korean">Korean</Link></ListItem>
          <ListItem><Link to="/categories/breakfast">Breakfast</Link></ListItem>
          <ListItem><Link to="/categories/lunch">lunch</Link></ListItem>
          <ListItem><Link to="/categories/dinner">Dinner</Link></ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
