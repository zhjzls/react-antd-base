import React from 'react';
import DataSource from '../features/DataSource'
import UserManage from '../features/UserManage'
import Login from '../features/Login'
export default [ 
    {
        name:'login',
        path: '/login',
        component: <Login />
    },
    {
        name:'datasource',
        path: '/datasource',
        component: <DataSource />
    },
    {
        name:'usermanage',
        path: '/usermanage',
        component: <UserManage />
    },
    {
        name:'tab666',
        path: '/tab666',
        component: <h2>tab666具体内容</h2>
    },
    {
        name: 'tab3',
        path: '/tab3',
        children: [
            {
                name: 'tab3-1',
                path: '/tab3/child1',
                component:<h3>tab3 - child1</h3>
            },
            {
                name: 'tab3-2',
                path: '/tab3/child2',
                component:<h2>tab3 - child2</h2>
            },
            {
                name: 'tab3-3',
                path: '/tab3/child3',
                children:[
                    {
                        name: 'tab3-3-1',
                        path: '/tab3/child3/content',
                        component:<h1>tab3 - child3-content</h1>
                    },
                ]
            },
    ]
    }
]
