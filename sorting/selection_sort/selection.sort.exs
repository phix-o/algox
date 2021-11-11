defmodule SelectionSort do
  def min_array([], small, index, _), do: { index, small }
  def min_array([head | tail], small, index, running_index) do
    if small < head do
      min_array(tail, small, index, running_index + 1)
    else
      min_array(tail, head, running_index, running_index + 1)
    end
  end
  def min_array(array) do
    min_array(array, hd(array), 0, 0)
  end

  def max_array([], big, index, _), do: { index, big }
  def max_array([head | tail], big, index, running_index) do
    if big > head do
      max_array(tail, big, index, running_index + 1)
    else
      max_array(tail, head, running_index, running_index + 1)
    end
  end
  def max_array(array) do
    max_array(array, hd(array), 0, 0)
  end

  defp s([], sorted_array, _), do: sorted_array
  defp s(array, sorted_array, is_ascending?) do
    {index, small} = if is_ascending?, do: min_array(array), else: max_array(array)
    s(
      List.delete_at(array, index),
      sorted_array ++ [small],
      is_ascending?)
  end

  def sort(array, is_ascending? \\ true) do
    s(array, [], is_ascending?)
  end

  def main() do
    array = [4, 2, 3, 45, 8, 1, 2, 0, -5, -12, 10, 45]
    IO.inspect sort(array)
    IO.inspect sort(array, false)
  end
end
