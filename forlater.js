/* //   return (
//     <>
//     <Router>}
      { <div id="sidebar">
        { collapsed props to change menu size using menucollapse state}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <Link to="/">
              <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
              </Link>
              <Link to="/about">
              <MenuItem icon={<FaList />}>Category</MenuItem>
              </Link>
              <Link to="/dashboard">
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              </Link>
              <Link to="/">
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              </Link>
              <Link to="/">
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
              </Link>
            </Menu>}

//             <Switch>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path = "/about">
//                 <About />
//               </Route>
//               <Route path = "/dashboard">
//                 <Dashboard />
//               </Route>
//             </Switch>

//           </SidebarContent>
//           <SidebarFooter>
//             <Menu iconShape="square">
//               <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
//             </Menu>
//           </SidebarFooter>

//         </ProSidebar>
//       </div>
//       </Router>
//     </>
//   );
// };
// }
*/