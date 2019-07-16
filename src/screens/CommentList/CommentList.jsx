import React from 'react';
import faker from 'faker';

import CommentCard from '../../components/CommentCard';
import ApprovalCard from '../../components/ApprovalCard';
const CommentList = () => {
    return (
        <div className="ui container comments">
                    <ApprovalCard>
                        <CommentCard
                            author={faker.name.findName()}
                            date={faker.date.past().toLocaleDateString()}
                            content={faker.lorem.sentence()}
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                    <ApprovalCard>
                        <CommentCard
                            author={faker.name.findName()}
                            date={faker.date.past().toLocaleDateString()}
                            content={faker.lorem.sentence()}
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                    <ApprovalCard>
                        <CommentCard
                            author={faker.name.findName()}
                            date={faker.date.past().toLocaleDateString()}
                            content={faker.lorem.sentence()}
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                    <ApprovalCard>
                        <CommentCard
                            author={faker.name.findName()}
                            date={faker.date.past().toLocaleDateString()}
                            content={faker.lorem.sentence()}
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
        </div>
    );
}

export default CommentList;
