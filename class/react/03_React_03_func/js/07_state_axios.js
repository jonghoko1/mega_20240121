//07_state_axios.js
const root = document.querySelector("#root");
const url = 'https://jsonplaceholder.typicode.com/users/';
class App extends React.Component {
    state = {
        idx: 1,
        users: [],
    }
    getData = async (_idx) => {
        console.log("데이터 가져오기 함수 실행");
        const { data } = await axios.get(url + _idx);
        console.log(data);
        return data;
    }
    getUser = async () => {
        const idx = this.state.idx + 1; //기존 state.idx의 값을 변경해준다.
        const user = await this.getData(idx);
        const users = [...this.state.users, user]; //기존 state.user라는 배열 데이터에 새로 받은 회원을 추가한다.
        this.setState({idx, users})
    }

    //componentDidMount() //최초 한번
    //componentDidUpdate() //render() 실행될 땜마다
    //componentWillUnmount() //component가 화면에서 퇴장할 때(페이지 전환)

    

    async componentDidMount() { //최초 Component가 생성될 때 한번 실행된다.
        console.log("mount");
        const user = await this.getData(this.state.idx);
        this.setState({
            user: [user]
        })
    }
    

    render() {
        return (
            <div className="container">
                <h1>Users</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>idNum</td>
                            <td>홍길동</td>
                            <td>근두운</td>
                            <td>hgd@anver.com</td>
                            <td>010-1111-2222</td>
                        </tr>
                    </tbody>
                </table>
                <div className="my-3 text-center">
                    <button className="btn btn-primary" onClick={this.getUser}>회원 가져오기</button>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<App />, root);