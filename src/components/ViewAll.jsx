import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view ").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">name</th>
                                    <th scope="col">friendName</th>
                                    <th scope="col">friendNickName</th>
                                    <th scope="col">DescribeYourFriend</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map(
                                (value, index)=>{
                                    return  <tr>
                                    <th scope="row">{index}</th>
                                    <td>{value.name}</td>
                                    <td>{value.friendName}</td>
                                    <td>{value.friendNickName}</td>
                                    <td>{value.DescribeYourFriend}</td>
                                </tr>
                                }
                               )

                               }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll