"use client";
import { useEffect, useState } from "react";

// project imports
import { axiosClient } from "../api";

export const useGetRoutes = (idRoute?: string) => {
  const [routes, setRoutes] = useState([]);
  const [route, setRoute] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    idRoute ? getRoutesById(idRoute) : getRoutes();
  }, []);

  const getRoutes = async () => {
    setLoading(true);
    const { data } = await axiosClient.get(`routes`);

    setRoutes(data.routes);
    setLoading(!loading);
  };

  const getRoutesById = async (id: string) => {
    setLoading(true);
    const { data } = await axiosClient.get(`routes/${id}`);

    setRoute(data);
    setLoading(!loading);
  };

  return {
    routes,
    route,
    loading,
  };
};
