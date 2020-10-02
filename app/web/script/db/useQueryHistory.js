

import React from 'react'

import {useSubscription, useQuery, useMutation} from 'nevisor-ui'
import {gql} from 'nevisor-ui'

const QUERY_HISTORY = gql`
    subscription {
        queryHistory(groupBy: "query") {
            count
            query
            values
            duration
        }
    }
`;

export default function useQueryHistory() {

    const [users, setUsers] = React.useState([])
    
    useSubscription(
        QUERY_HISTORY,
        {
            onSubscriptionData: (data) => {
                setUsers(data.subscriptionData.data.queryHistory);
            },
        },
    )

    return users
}