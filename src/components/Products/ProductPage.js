import React, { useEffect, useReducer } from "react";
import SearchBar from "../ui/SearchBar";
import ProductList from "./ProductList";
import Pagination from "../ui/Pagination";

const products = [
  { id: 1, title: "Nha Trang", price: 100 },
  { id: 2, title: "Da Nang", price: 100 },
  { id: 3, title: "Vung Tau", price: 100 },
  { id: 4, title: "Tien Giang", price: 100 },
  { id: 5, title: "Vinh Long", price: 100 },
  { id: 6, title: "Da Lat", price: 100 },
  { id: 7, title: "Gia Lai", price: 100 },
  { id: 8, title: "Dong Nai", price: 100 },
  { id: 9, title: "Tay Ninh", price: 100 },
  { id: 10, title: "Phan Thiet", price: 100 },
  { id: 11, title: "Lam Dong", price: 100 },
  { id: 12, title: "Soc Trang", price: 100 },
];

const initialState = {
  voucherList: [],
  showedList: [],
  totalPages: 0,
  currentPage: 1,
  search: "",
};

const listReducer = (state, action) => {
  switch (action.type) {
    case "GET_VOUCHER_LIST":
      return {
        ...state,
        voucherList: action.payload,
      };
    case "GET_SHOWED_LIST":
      let currentList = [...state.voucherList];
      const { currentPage } = state;

      if (state.search) {
        const filterRegex = new RegExp(state.search, "i");
        currentList = currentList.filter(({ title }) =>
          filterRegex.test(title)
        );
      }

      const totalPages = Math.ceil(currentList.length / 8);
      currentList = currentList.slice((currentPage - 1) * 8, currentPage * 8);

      return {
        ...state,
        showedList: currentList,
        totalPages,
      };

    case "SEARCH":
      return {
        ...state,
        search: action.payload,
        currentPage: 1,
      };

    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

const ProductPage = () => {
  const [listState, dispatch] = useReducer(listReducer, initialState);
  const { voucherList, showedList, totalPages, currentPage, search } =
    listState;

  useEffect(() => {
    dispatch({ type: "GET_SHOWED_LIST" });
  }, [search, currentPage, voucherList]);

  useEffect(() => {
    dispatch({ type: "GET_VOUCHER_LIST", payload: products });
  }, []);

  const searchKeyWord = (search) => {
    dispatch({ type: "SEARCH", payload: search });
  };

  const handleChangePage = (page) => {
    dispatch({ type: "CHANGE_PAGE", payload: page });
  };

  return (
    <div className="product">
      <SearchBar searchKeyWord={searchKeyWord} />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
        />
      )}
      <ProductList list={showedList} />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
        />
      )}
    </div>
  );
};

export default ProductPage;
