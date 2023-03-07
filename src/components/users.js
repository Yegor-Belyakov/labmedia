import React, { useEffect, useState } from "react";

import InputSearch from "./inputSearch";

import TableUsers from "./table";
import _ from "lodash";
import Pagination from "./pagination";
import "./user.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [filtredUsers, setFiltredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [paginationVisability, setPaginationVasability] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortBy, setSortBy] = useState({ iter: "", order: "" });
  // const [sortBy, setSortBy] = useState({iter: 'username', order: 'asc'}) по умолчанию можно установить сортировку по имени по возрастанию.

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const onSort = (item) => {
    if (sortBy.iter === item) {
      setSortBy((prev) => ({
        ...prev,
        order: prev.order === "asc" ? "desc" : "asc",
      }));
    } else {
      setSortBy({ iter: item, order: "asc" });
    }
  };

  useEffect(() => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    let filtered = users;

    if (searchValue) {
      const s = searchValue.toLowerCase();
      filtered = filtered.filter(
        (n) =>
          n.username.toLowerCase().includes(s) ||
          n.email.toLowerCase().includes(s)
      );
    }

    setFiltredUsers(filtered);
  }, [users, searchValue, currentPage]);

  const usersCount = filtredUsers.length;
  const pageSize = 5;

  const onPageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  
  const paginate = (users, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return [...users].splice(startIndex, pageSize);
  };

  const sortedUsers = _.orderBy(filtredUsers, [sortBy.iter], [sortBy.order]);

  const userCrop = paginate(sortedUsers, currentPage, pageSize);

  return (
    <div>
      <div className="header">Список пользователей</div>

      <InputSearch
        searchValue={searchValue}
        searchHandler={searchHandler}
        setSearchValue={setSearchValue}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <TableUsers
        setPaginationVasability={setPaginationVasability}
        filtredUsers={userCrop}
        onSort={onSort}
        setUsers={setUsers}
        users={users}
      />
      {paginationVisability && (
        <Pagination
          usersCount={usersCount}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Users;
