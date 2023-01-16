import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, IconButton } from '@mui/material';
import { roomInfomation } from '../../utils/data/roomInfo';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const rooms = {

}


//Get room Information from the redux store

//the initial data is from the utils/roomInfo.ts file
//the roomInfo is what is being used here
//So make the initial state to be those data




const Room = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <div className=''>

      {/* USING MUI */}
      <div className="flex items-center justify-between p-2 bg-cyan-600">
        <div className="flex items-center gap-8 px-4">
          <IconButton aria-label='delete' >
            <MenuIcon fontSize='large' className='text-white' />
          </IconButton>
          <h2 className='text-white text-xl font-bold'>Room Darshboard</h2>
        </div>
        <div className="text-white bg-blue-400 w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <span className='text-sm'>AN</span>
        </div>
      </div>
      <div className='px-4'>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {roomInfomation.map((room, index) => {
                return (
                  <Tab key={index} label={`Room ${index + 1}`} {...a11yProps(index)} />
                )
              })
            }

            </Tabs>
          </Box>

          {roomInfomation.map((room, index) => {
            return (
              <TabPanel key={index} value={value} index={index}> 

                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-6 items-center">
                    <div className=" p-2 bg-blue-400 rounded-full">
                      <MeetingRoomIcon fontSize='large' />
                    </div>
                    <div className="">
                      <p className='text-md font-medium text-gray-700'>{room.room[0].roomName}</p>
                      <p className='text-xs text-gray-500'>Room type - {room.hotel? "Hotel": "Unkown"}</p>
                      <p className='text-xs text-gray-500'>{room.room[0].travelStartDate.toLocaleDateString()} - {room.room[0].travelEndDate.toLocaleDateString()}</p>
                    </div>
                  </div>

                  <IconButton aria-label='more'>
                    <MoreVertIcon fontSize='medium' />
                  </IconButton>

                </div>

                <img src={room.hotel[0].hotelImage} className='h-[300px] w-full object-cover' alt="" />

                <div className="flex gap-4 mt-4 mb-4">
                  <button className='border-2 border-green-600 rounded-full p-1 gap-2 pr-3 flex items-center justify-center text-green-600'>
                    <CheckCircleOutlineIcon color='success' fontSize='medium' />
                    Booked
                  </button>
                  <button className='border-2 border-[#A51E8F] rounded-full p-1 gap-2 pr-3 flex items-center justify-center text-[#A51E8F]'>
                    <div className="border-2 border-[#A51E8F] rounded-full">
                      <AttachMoneyIcon className='fill-[#A51E8F]' fontSize='medium' />
                    </div>
                    Balance due
                  </button>
                </div>

                <div className="">
                  <p className='text-sm text-gray-700'>{room.hotel[0].hotelDescription}</p>
                </div>

                {/* Guests */}

                <div className="flex items-center gap-7 mt-4">
                  <button className='text-cyan-500 flex items-center gap-2 text-sm'><EditLocationAltIcon fontSize='small' />Modify</button>
                  <button className='text-cyan-500 flex items-center gap-2 text-sm'>
                    <div className="border-2 border-cyan-500 rounded-full">
                      <AttachMoneyIcon fontSize='small' />
                    </div>
                    Make payment
                  </button>
                </div>

                <div className="mt-4">
                  <h2 className='text-gray-800 text-lg mb-3'>Guests in this room</h2>

                  {room.travelers.map((traveler, index) => {
                    return(
                      <button key={index} className="border-2 border-cyan-500 p-1  text-cyan-500 rounded-full flex items-center gap-1 pr-2">
                        {traveler.age > 18 ?<PersonIcon fontSize='small' />:
                        <ChildCareIcon fontSize='small' />}
                        <span>{traveler.age > 18? "Adult":"Child"} {index + 1}</span>
                      </button>
                    )
                  })}

                </div>


              </TabPanel>
            )
          })}
        </Box>
      </div>
    </div>
  )
}

export default Room